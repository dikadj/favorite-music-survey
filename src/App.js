import React from "react"
import Helmet from "react-helmet"
import "./App.scss"

// const FormItem = ({ id, label, type, placeholder, required=false }) => (
//   <div className="form-group">
//     <label htmlFor={id}>{label}</label>
//     <input type={type} id={id} className="form-control" placeholder={placeholder} required={required} />
//   </div>
// )

const App = () => (
  <div>
    <Helmet>
      <title>Favorite Music Survey</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </Helmet>

    <div>
      {/* start content here */}

      <div>
        <h1 id="title" className="text-center pt-2"><strong>Favorite Music Survey</strong></h1>
        <p id="description" className="text-center">Let me know a little bit of your favorite piece</p>
      </div>

      <div className="container">

        <form id="survey-form">
          <div className="form-group row">
            <label htmlFor="nameInput" id="name-label" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" id="nameInput name" className="form-control" placeholder="Your name" required autoFocus />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="emailInput" id="email-label" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" id="emailInput email" className="form-control" placeholder="Email address" aria-describedby="emailHelp" required />
              <small id="emailHelp" className="form-text text-muted">Only you and I will ever know your about email address from here</small>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="ageInput" id="number-label" className="col-sm-2">Age</label>
            {/* later provide validation for age < 13 */}
            <div className="col-sm-10">
              <input type="number" id="ageInput number" className="form-control" placeholder="eg. if 17 years old, type: 17 (only number)" min="13" required />
            </div>
          </div>
          <div className="form-group">
            <legend className="col-form-label">Do you use any social media service? (Choose all that apply):</legend>
            <div id="social">
              <div className="form-check">
                <input type="checkbox" id="twitter" className="form-check-input" value="" />
                <label for="twitter" className="form-check-label">Twitter</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="instagram" className="form-check-input" value="" />
                <label for="instagram" className="form-check-label">Instagram</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="facebook" className="form-check-input" value="" />
                <label for="facebook" className="form-check-label">Facebook</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="askFm" className="form-check-input" value="" />
                <label for="askFm" className="form-check-label">Ask.fm</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="soundcloud" className="form-check-input" value="" />
                <label for="soundcloud" className="form-check-label">Soundcloud</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="youtube" className="form-check-input" value="" />
                <label for="youtube" className="form-check-label">Youtube</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="socialOthers" className="form-check-input" value="" />
                <label for="socialOthers" className="form-check-label">Others (Please specify, if more than one, separate with comma)</label>
                {" "}
                <input type="text" />
              </div>
              <div className="form-check">
                {/* later validation: mute/"disabled" all other checkboxes when this one checked */}
                <input type="checkbox" id="noSocial" className="form-check-input" value="" />
                <label for="noSocial" className="form-check-label">I don't have any</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <legend className="col-form-label col-12">Do you listen to music often?</legend>
            <div className="col-2">
              <div className="form-check">
                <input type="radio" id="isListenYes" className="form-check-input" name="isListen" />
                <label htmlFor="isListenYes" className="form-check-label">Yes</label>
              </div>
            </div>
            <div className="col-2">
              <div className="form-check">
                <input type="radio" id="isListenNo" className="form-check-input" name="isListen" />
                <label htmlFor="isListenNo" className="form-check-label">No</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <legend className="col-form-label col-12">How long are you typically listen to music in a day?</legend>
            <div className="col-4 col-sm-3 col-md-2">
              <div className="form-check">
                <input type="radio" id="less1" className="form-check-input" name="howLongListen" />
                <label htmlFor="less1" className="form-check-label">&lt; 1 hour</label>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-2">
              <div className="form-check">
                <input type="radio" id="more1less3" className="form-check-input" name="howLongListen" />
                <label htmlFor="more1less3" className="form-check-label">1-3 hours</label>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-2">
              <div className="form-check">
                <input type="radio" id="more3less6" className="form-check-input" name="howLongListen" />
                <label htmlFor="more3less6" className="form-check-label">3-6 hours</label>
              </div>
            </div>
            <div className="col-4 col-sm-3 col-md-2">
              <div className="form-check">
                <input type="radio" id="more6" className="form-check-input" name="howLongListen" />
                <label htmlFor="more6" className="form-check-label">&gt; 6 hours</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="genre">Do you have any preference in music?</label>
            <select id="genre dropdown" className="form-control">
              <option selected>Your favorite genre...</option>
              <option>Rock</option>
              <option>R&B</option>
              <option>Pop</option>
              <option>Alternative / Indie</option>
              <option>Country</option>
              <option>Hard Music (Hardcore, Post-hardcore, etc)</option>
              <option>Rap / Hip Hop</option>
              <option>Electronic</option>
              <option>Others</option>
              {/* later write function to specify "others" option if selected: */}
              {/* Others (Please specify, if more than one, separate with comma) */}
            </select>
          </div>
          <div className="form-group">
            <legend className="col-form-label">Do you use any online streaming service to listen to music?</legend>
            <div id="musicService">
              <div className="form-check">
                <input type="checkbox" id="spotify" className="form-check-input" value="" />
                <label htmlFor="spotify" className="form-check-label">Spotify</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="itunes" className="form-check-input" value="" />
                <label htmlFor="itunes" className="form-check-label">iTunes</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="lastFm" className="form-check-input" value="" />
                <label htmlFor="lastFm" className="form-check-label">Last.fm</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="pandora" className="form-check-input" value="" />
                <label htmlFor="pandora" className="form-check-label">Pandora</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="beatsMusic" className="form-check-input" value="" />
                <label htmlFor="beatsMusic" className="form-check-label">Beats Music</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="rhapsody" className="form-check-input" value="" />
                <label htmlFor="rhapsody" className="form-check-label">Rhapsody</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="rdio" className="form-check-input" value="" />
                <label htmlFor="rdio" className="form-check-label">Rdio</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="songza" className="form-check-input" value="" />
                <label htmlFor="songza" className="form-check-label">Songza</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="slacker" className="form-check-input" value="" />
                <label htmlFor="slacker" className="form-check-label">Slacker</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="grooveshark" className="form-check-input" value="" />
                <label htmlFor="grooveshark" className="form-check-label">Grooveshark</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="musicServiceOthers" className="form-check-input" value="" />
                <label htmlFor="musicServiceOthers" className="form-check-label">Others</label>
                {/* later validation: Others (Please specify, if more than one, separate with comma) */}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="commentBox">Any thougths or opinion about music? (Anything is fine)</label>
            <textarea id="commentBox" className="form-control"></textarea>
          </div>
          <button type="submit" id="submit" className="btn btn-success">Submit</button>
        </form>

        {/* end content here */}
      </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
  </div>
)

export default App

// WIREFRAME

// name, email, age

// Do you have any social media account?(Choose all that apply.)
// twitter | instagram | facebook | ask.fm | soundcloud | youtube |
// others (Please specify, if more than one, separate with comma)

// Do you listen to music often?
// yes | no

// How long are you typically listen to music in a day?
// < 1 hour | 1-3 hour | 3-6 hour | > 6 hour

// Do you have any preference in music?
// Like genre/sub-genre/specific country's music/traditional music is also fine
// (Choose all that apply.)
// Rock | R&B | Pop | Alternative(Indie) | Country | Hard Music | Rap(Hip Hop) | Electronic |
// Others (Please specify, if more than one, separate with comma)

// Do you use any online service to listen to music?
// spotify | itunes | last.fm | pandora | beats music | rhapsody | rdio | songza | slacker | grooveshark |
// Others (Please specify, if more than one, separate with comma)

// Any thougths or opinion about music? Anything is fine
// comment box
