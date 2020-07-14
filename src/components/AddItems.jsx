import React, {useState} from 'react';

function AddItems() {
    const [modalState, setModalState] = useState(false);

    const toggleModalState = () => {
        setModalState(!modalState)
    }

    return (
        <div>
    <button onClick={() => toggleModalState()}>Add Items to Fridge</button>
            <div className={`modalBackground modalShowing-${modalState}`}>
              <div className="modalInner">
                <div className="modalContent">
                    <button>Return to Fridge</button>
                    {/* Search Box to search for items */}
                    <h3>Search grocery items to add to your fridge</h3>
                    <form>
                        <label>
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Search" />
                    </form>
                </div>
              </div>
            </div>
        </div>
    )
}

export default AddItems


// export class AddItems extends Component {
//         render() {
//         return (
//             <div style={{textAlign: "center"}}>
//                 <h1>Add Groceries To Fridge</h1>
//                 <form>
//                     <label>
//                         <input type="text" name="name" />
//                     </label>
//                     <input type="submit" value="Submit" />
//                     </form>
//             </div>
//         )
//     }
// }

// export default AddItems