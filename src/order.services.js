import { db } from './firebase.js'

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'

const ordersCollectionRef = collection(db, "orders");
const usersCollectionRef = collection(db, "users");

class OrderDataService {
    addOrders = (newOrder) => {
        return addDoc(ordersCollectionRef, newOrder);
    }

    updateOrder = (id, updatedOrder) => {
        const orderDoc = doc(db, "orders", id);
        return updateDoc(orderDoc, updatedOrder);
    }

    deleteOrder = (id) => {
        const orderDoc = doc(db, "orders", id);
        return deleteDoc(orderDoc);
    }

    getAllOrders = () => {
        return getDocs(ordersCollectionRef);
    }

    getOrder = (id) => {
        const orderDoc = doc(db, "orders", id);
        return getDoc(orderDoc);
    }

    addUsers = (newUser) => {
        return addDoc(usersCollectionRef, newUser);
    }

    updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "users", id);
        return updateDoc(userDoc, updatedUser);
    }
}

export default new OrderDataService();