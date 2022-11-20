import {React,useState, useEffect} from 'react';
import OrderDataService from "../order.services";


const UpdateButton = ({order, docId}) => {
    const [cycleStatus, setCycleStatus] = useState(order.cycleStatus);
    const [cycleStatusCollection, setCycleStatusCollection] = useState(order.cycleStatusCollection);
    
    useEffect (() => {
        setCycleStatusCollection(order.cycleStatusCollection);
        setCycleStatus(order.cycleStatus);
        
    }, [order.cycleStatusCollection]);
    
    const current = new Date();
    
    const handleCycleStatus = () => {
        cycleStatusCollection.length === 4 ? setCycleStatus("Completed") : setCycleStatus("Pending");
        if(cycleStatusCollection.length <= 1) {
            return setCycleStatusCollection(cycleStatusCollection.push(
                {
                    icon: "bxs-washer",
                    name: "Washing",
                    timeStamp: `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
                }
            ))
        }
        else if(cycleStatusCollection.length === 2) {
            return setCycleStatusCollection(cycleStatusCollection.push(
                {
                    icon: "bxs-package",
                    name: "Ready for Pickup",
                    timeStamp: `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
                }
            ))
        }
        else if(cycleStatusCollection.length === 3) {
            setCycleStatus("Completed");
            return setCycleStatusCollection(cycleStatusCollection.push(
                {
                    icon: "bx-badge-check",
                    name: "Completed",
                    timeStamp: `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
                }
            ))
        }
        cycleStatusCollection.length === 4 ? setCycleStatus("Completed") : setCycleStatus("Pending");
    }
    
    const handleUpdateCycle = async(e) => {
        e.preventDefault();
        handleCycleStatus();
        cycleStatusCollection.length === 4 ? setCycleStatus("Completed") : setCycleStatus("Pending");
        const newData = {
            cycleStatus: cycleStatus,
            cycleStatusCollection: cycleStatusCollection,
        }
        try {
            await OrderDataService.updateOrder(docId, newData);
        }
        catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="button" onClick={handleUpdateCycle}>
        <i className='bx bx-trip' ></i>
        <p>Update Cycle</p>
    </div>
  )
}

export default UpdateButton