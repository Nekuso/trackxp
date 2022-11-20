import {React,useState, useEffect} from 'react';
import OrderDataService from "../order.services";


const UpdateButton = ({order, docId, cycleCollectionCount}) => {
    const [cycleStatus, setCycleStatus] = useState(order.cycleStatus);
    const [cycleStatusCollection, setCycleStatusCollection] = useState(order.cycleStatusCollection);
    const current = new Date();

    const handleCycleStatus = () => {
        if(cycleStatusCollection.length <= 1) {
            console.log(cycleStatus);
            setCycleStatusCollection(cycleStatusCollection.push(
                {
                    icon: "bxs-washer",
                    name: "Washing",
                    timeStamp: `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
                }
            ))
        }
        else if(cycleStatusCollection.length === 2) {
            console.log(cycleStatus);
            setCycleStatusCollection(cycleStatusCollection.push(
                {
                    icon: "bxs-package",
                    name: "Ready for Pickup",
                    timeStamp: `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
                }
                ))
            }
        else if(cycleStatusCollection.length === 3) {
            setCycleStatusCollection(cycleStatusCollection.push(
                {
                    icon: "bx-badge-check",
                    name: "Completed",
                    timeStamp: `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
                }
            ))
        }
    }
    
    const handleUpdateCycle = async(e) => {
        e.preventDefault();
        handleCycleStatus();
        cycleCollectionCount === 3 && setCycleStatus("Completed")
        
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

    useEffect (() => {
        setCycleStatusCollection(order.cycleStatusCollection);
        setCycleStatus(order.cycleStatus);
        cycleCollectionCount === 3 && setCycleStatus("Completed")
        
    }, [order.cycleStatusCollection, cycleCollectionCount, order.cycleStatus]);

  return (
    <div className="button" onClick={handleUpdateCycle}>
        <i className='bx bx-trip' ></i>
        <p>Update Cycle</p>
    </div>
  )
}

export default UpdateButton