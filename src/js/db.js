import { openDB } from 'idb';

const DB_NAME = 'studyquiz';
const DB_VERSION = 1;

let dbInstance = null;

export async function initDB() {
  dbInstance = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('quizResults')) {
        const resultsStore = db.createObjectStore('quizResults', {
          keyPath: 'id',
          autoIncrement: true,
        });
        resultsStore.createIndex('subjectId', 'subjectId');
        resultsStore.createIndex('date', 'date');
      }

      if (!db.objectStoreNames.contains('questionStats')) {
        db.createObjectStore('questionStats', { keyPath: 'questionId' });
      }
    },
  });
  return dbInstance;
}

export async function saveQuizResult(result) {
  const db = dbInstance;
  return db.add('quizResults', {
    ...result,
    date: new Date().toISOString(),
  });
}

export async function getQuizHistory(subjectId) {
  const db = dbInstance;
  if (subjectId) {
    return db.getAllFromIndex('quizResults', 'subjectId', subjectId);
  }
  return db.getAll('quizResults');
}

export async function updateQuestionStats(questionId, correct) {
  const db = dbInstance;
  const tx = db.transaction('questionStats', 'readwrite');
  const store = tx.objectStore('questionStats');

  let stats = await store.get(questionId);
  if (!stats) {
    stats = {
      questionId,
      timesAsked: 0,
      timesCorrect: 0,
      timesIncorrect: 0,
      lastAsked: null,
      lastResult: null,
    };
  }

  stats.timesAsked++;
  if (correct) {
    stats.timesCorrect++;
  } else {
    stats.timesIncorrect++;
  }
  stats.lastAsked = new Date().toISOString();
  stats.lastResult = correct;

  await store.put(stats);
  await tx.done;
}

export async function getQuestionStats() {
  const db = dbInstance;
  return db.getAll('questionStats');
}

export async function getFailedQuestionIds(subjectId) {
  const stats = await getQuestionStats();
  return stats
    .filter(s => s.timesIncorrect > 0 && (!subjectId || s.questionId.startsWith(subjectId)))
    .sort((a, b) => {
      // Higher failure rate first, then more recent failures
      const rateA = a.timesIncorrect / a.timesAsked;
      const rateB = b.timesIncorrect / b.timesAsked;
      if (rateA !== rateB) return rateB - rateA;
      return new Date(b.lastAsked) - new Date(a.lastAsked);
    })
    .map(s => s.questionId);
}

export async function clearAllData() {
  const db = dbInstance;
  const tx = db.transaction(['quizResults', 'questionStats'], 'readwrite');
  await tx.objectStore('quizResults').clear();
  await tx.objectStore('questionStats').clear();
  await tx.done;
}
