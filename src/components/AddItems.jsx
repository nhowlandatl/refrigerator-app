import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function AddItems() {
    
    const [modalState, setModalState] = useState(false);

    const toggleModalState = () => {
        setModalState(!modalState)
    }

    return (
        <div style={{textAlign: "center"}}>
    <Button variant="contained" color="primary" onClick={() => toggleModalState()}>Add Items to Fridge</Button>
            <div className={`modalBackground modalShowing-${modalState}`}>
              <div className="modalInner">
                <div className="modalContent">
                    <button onClick={() => toggleModalState()}>Exit</button>
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
