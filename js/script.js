// Firebase SDK 라이브러리 가져오기
import config from "./apikey.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const API_KEY = config.apiKey;
const AUTH_DOMAIN = config.authDomain;
const PROJECT_ID = config.projectId;
const STORAGE_BUCKET = config.storageBucket;
const MESSAGING_SENDER_ID = config.messagingSenderId;
const APP_ID = config.appId;
const MEASUREMENT_ID = config.measurementId;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#visitBtn").click(async function () {
  console.log("im in");
  let content = $("#content").val();
  let name = $("#writer").val();
  console.log("content: " + content);
  console.log("name: " + name);
  let doc = {
    content: content,
    writer: name,
    timestamp: serverTimestamp(),
  };

  await addDoc(collection(db, "visitor"), doc);
  alert("등록완료!");
  window.location.reload();
});

// 데이터를 최신순으로 가져오기 위한 함수
async function loadVisitorLogs() {
  // timestamp로 최신 순으로 정렬된 데이터 쿼리
  const q = query(collection(db, "visitor"), orderBy("timestamp", "asc"));
  const querySnapshot = await getDocs(q);

  // 기존 리스트 비우기
  $("#list").empty();

  // 가져온 데이터를 순회하면서 HTML로 추가
  querySnapshot.forEach((doc) => {
    let row = doc.data();

    let content = row["content"];
    let writer = row["writer"];

    let temp_html = `            
            <form class="visitcard" name="f">
                <table id="t1">
                    <h5 class="writer">${writer}</h5>
                    <p class="content">${content}</p>
                </table>
            </form>`;

    $("#list").append(temp_html);
  });
}

// 페이지가 로드될 때 방문 기록을 불러옴
$(document).ready(function () {
  loadVisitorLogs();
});
