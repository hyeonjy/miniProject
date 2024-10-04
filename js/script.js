// Firebase SDK 라이브러리 가져오기
import config from "./apikey.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  doc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  where,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

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

//데이터 CREATE
$("#visitForm").submit(async function (event) {
  event.preventDefault();
  let content = $("#content").val();
  let name = $("#writer").val();
  let doc = {
    content: content,
    writer: name,
    timestamp: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "visitor"), doc);
    alert("등록완료!");
    window.location.reload();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("등록 실패: " + error.message);
  }
});

// (READ) 데이터를 최신순으로 가져오기 위한 함수
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
          <div>            
            <div class="visitcard" name="f">
                <div id="table">
                    <h5 class="writer">${writer}</h5>
                    <p class="content">${content}</p>
                </div>
                <div id="visitIconBox">
                  <i class="fa-solid fa-pen-to-square visitIcon" id="editIcon" style="margin-right: 7px"></i>
                  <i class="fa-solid fa-trash visitIcon" id="deleteIcon"></i>
                </div>
                <form id="editForm" class="hidden">
                  <input type="text" name="newcontent" class="newcontent" placeholder="내용을 입력해주세요."/>
                  <button type="submit" class="editBtn">수정</button>
                </form>
              </div>
            </div>
            `;

    $("#list").append(temp_html);
  });
}

// UPDATE 방명록 편집
$(document).on("click", "#editIcon", async function (event) {
  let visitCard = $(event.target.parentElement.parentElement);
  let table = visitCard.find("#table");
  let visitBoxIcon = visitCard.find("#visitIconBox");
  let editForm = visitCard.find("#editForm");
  let writer = table.find(".writer").text();

  table.addClass("hidden");
  visitBoxIcon.addClass("hidden");
  editForm.removeClass("hidden");

  editForm.off("submit").on("submit", async function (event) {
    event.preventDefault();

    let newContent = editForm.find(".newcontent").val();

    let queryRef = collection(db, "visitor");
    let q = query(queryRef, where("writer", "==", writer));
    let querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (d) => {
      await updateDoc(doc(db, "visitor", d.id), {
        content: newContent,
      });
      alert("수정완료!");
      window.location.reload();
    });
  });
});

// 페이지가 로드될 때 방문 기록을 불러옴
$(document).ready(function () {
  loadVisitorLogs();
});
