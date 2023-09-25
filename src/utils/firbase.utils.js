import {initializeApp} from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, getDoc, doc, setDoc, deleteDoc, updateDoc, collectionGroup } from "firebase/firestore";
import firebaseConfig from "./firebase.key.js"


const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);


export async function SignUser(signupdata) {
  try {
    const signup = collection(db, "users");
    await setDoc(doc(signup, signupdata.user), {username: signupdata.user, password: signupdata.pass, email: signupdata.email, phno: signupdata.phnum})
    const userdetail = collection(db, "user-details");
    await setDoc(doc(userdetail, signupdata.user), {username: signupdata.user})
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function loginuser(mail, pass) {
  const userpath = doc(db, "users", mail);
  const userSnap = await getDoc(userpath); 
  if (userSnap.exists()) {
    const userdata = userSnap.data();
    if (userdata.username === mail && userdata.password === pass) {
      return true;
    }
  } else {
    console.log("No such document!");
    return false;
  }
}

export async function GetCategory() {
  let cat = []
  const querySnapshot = await getDocs(collection(db, "category"));
  querySnapshot.forEach((doc) => {
    cat.push({ id: doc.id })
  })
  return cat;
}


let userid = sessionStorage.getItem('name');

export async function WriteDataIn(cat, catin, data) {
  const citiesRef = collection(db, 'category');
  await addDoc(collection(citiesRef, cat, catin), {
    id: userid,
    name: data.name,
    stream: data.stream,
    subject : data.subject,
    title: data.title,
    price: data.price 
})
}

export async function getproducts() {
  const notes = [];
  const museums = query(collectionGroup(db, 'userdata'));
  const querySnapshot = await getDocs(museums);
  querySnapshot.forEach((doc) => {
    let d = {id: doc.id, name: doc.data()}
    notes.push(d);
  });
  return notes; 
}

export async function filterproducts(id) {
  const notes = [];
  const museums = query(collectionGroup(db, 'userdata'), where('stream', '==', id));
  const querySnapshot = await getDocs(museums);
  querySnapshot.forEach((doc) => {
    let d = {id: doc.id, name: doc.data()}
    notes.push(d);
  });
  return notes; 
}

export async function getproductsbyid() {
  let useid = sessionStorage.getItem('name');
  const notes = [];
  const museums = query(collectionGroup(db, 'userdata'), where('id', '==', useid));
  const querySnapshot = await getDocs(museums);
  querySnapshot.forEach((doc) => {
    let d = {id: doc.id, name: doc.data()}
    notes.push(d);
  });
  return notes; 
}

export async function GetUserDetails() {
    let useid = sessionStorage.getItem('name')
    let detail = [];
    const dtwo = await getDocs(query(collection(db, "user-details"), where("username", "==", useid)));
    dtwo.forEach((ell) => {
      let d = {id:ell.id, name: ell.data()}
      detail.push(d);
    });
    return detail;
}

export async function updateProfile(userid, data){
  let useid = sessionStorage.getItem('name')
  const washingtonRef = doc(db, "user-details", useid);
  await updateDoc(washingtonRef, {
 college : data.college,
 age: data.age,
 username: data.username
});
}

export async function deletedoc(stream, idofcontent) {
  await deleteDoc(doc(db, `category/${stream}/userdata/${idofcontent}`));
}

export async function GetEachProductwithId(){
  let cat = []
  const querySnapshot = await getDocs(query(collectionGroup(db, 'userdata/EpgGpTVZJMazzFULn55f')));
  querySnapshot.forEach((doc) => {
    cat.push({ id: doc.data() })
  })
  return cat;
}














