import React from 'react';
import fridge from './assets/fridge-QKKKFUJ.jpg';
import feature1 from './assets/cutlery_64px.png';
import feature2 from './assets/mobile_64px.png';
import feature3 from './assets/ingredients_80px.png';
import recipeFeature from './assets/recipe-feature.jpg';
import notificationFeature from './assets/notification-feature.jpg';
import foodWasteFeature from './assets/food-waste-feature.jpg';
import './FullPageIntroWithFixedNavbar.css';

import { MDBContainer, MDBCardText, MDBCard, MDBCol, MDBRow, MDBCardBody, MDBCardTitle } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

class FullPageIntroWithFixedNavbar extends React.Component
{
  render()
  {
    return (
      <div>
        <header>
          <MDBContainer style={{ paddingTop: '15rem', paddingLeft: '10rem', paddingRight: '10rem' }} className="text-black text-center" >
            <MDBRow className="mx-auto my-auto text-center">
              <MDBCol size="6">
                <h2>Preventing Food Waste and Saving You Money</h2>
                <br />
                <h5>FridgeBuddy keeps track of what's in your fridge, freezer & pantry and  makes recipe suggestions as well as send notifications to your phone reminding you when items are about to expire. </h5>
              </MDBCol>
              <MDBCol size="6">
                <img src={fridge} className="img-fluid" alt="" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </header>

        <main>
          {/* Short summary of features */}
          <MDBContainer className="text-center my-5">
            <h2> Our features </h2>
            <br />
            <h5>FridgeBuddy is an application that manages the inventory of food in your refrigerator, freezer and pantries.
            It also has the ability to monitor when items are about to expire and makes recipe suggestions so that items don't go to waste thus saving you money!! When grocery shopping, easily know what you need by checking "My Fridge" from the convenience of your phone.</h5>

            <MDBRow className="mx-auto my-auto" style={{ paddingTop: '3rem' }}>
              <MDBCol xs="12" sm="12" md="4">
                <MDBCard>
                  <img className="img-fluid mx-auto" src={feature1} alt="" />
                  <MDBCardBody>
                    <MDBCardTitle>Inventory Control</MDBCardTitle>
                    <MDBCardText>
                      Know what's in your kitchen from the ease of your mobile device.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs="12" sm="12" md="4">
                <MDBCard>
                  <img className="img-fluid mx-auto" src={feature2} alt="" />
                  <MDBCardBody>
                    <MDBCardTitle>Expiration Control</MDBCardTitle>
                    <MDBCardText>
                      Enter the expiration date of items to ensure they are used before they go bad.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs="12" sm="12" md="4">
                <MDBCard>
                  <img className="img-fluid mx-auto" src={feature3} alt="" />
                  <MDBCardBody>
                    <MDBCardTitle>My Recipes</MDBCardTitle>
                    <MDBCardText>
                      Get recipes suggestions based on items in your fridge, freezer and pantries.
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* How the feature looks when used */}
          <MDBContainer className="text-center my-5">
            <MDBRow className="mx-auto my-auto" style={{ paddingTop: '3rem' }}>
              <MDBCol size="6" className="mx-auto my-auto" >
                <h2>This is really cool</h2>
                <p>See image on right (which I need to resize)</p>
              </MDBCol>
              <MDBCol size="6">
                <img className="img-fluid mx-auto" src={recipeFeature} alt="" />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto my-auto" style={{ paddingTop: '3rem' }}>
              <MDBCol size="6">
                <img className="img-fluid mx-auto" src={notificationFeature} alt="" />
              </MDBCol>
              <MDBCol size="6" className="mx-auto my-auto" >
                <h2>This is also really cool</h2>
                <p>See image on left (which I need to resize)</p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto my-auto" style={{ paddingTop: '3rem' }}>
              <MDBCol size="6" className="mx-auto my-auto" >
                <h2>This is really cool</h2>
                <p>See image on right (which I need to resize)</p>
              </MDBCol>
              <MDBCol size="6">
                <img className="img-fluid mx-auto" src={foodWasteFeature} alt="" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>

      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;