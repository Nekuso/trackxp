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
}

export default new OrderDataService();