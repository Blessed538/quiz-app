import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="display-4 text-center" >
            Makarios Cbt Application
          </h2>
        </div>

        {/* <button
          type="button"
          className="btn btn-primary text-center"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Log In For Your Quiz
        </button> */}

        {/* <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title" id="exampleModalCenterTitle">
                  Sign In
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="control-group text-center mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="username"
                    />
                  </div>
                  <div className="control-group mb-5">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="password"
                    />
                    <input
                      type="submit"
                      value="Log in"
                      className="btn btn-primary btn-large btn-block mt-3"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default Home;
