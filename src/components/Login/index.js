import React, { Component } from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.bounceLeft = this.bounceLeft.bind(this);
    this.bounceRight = this.bounceRight.bind(this);
  }

  bounceLeft() {
    this.formRef.current.classList.remove("bounceRight");
    this.formRef.current.classList.add("bounceLeft");
  }

  bounceRight() {
    this.formRef.current.classList.remove("bounceLeft");
    this.formRef.current.classList.add("bounceRight");
  }

  render() {
    return (
      <div>
        <section class="user">
          <div class="user_options-container">
            <div class="user_options-text">
              <div class="user_options-unregistered">
                <h2 class="user_unregistered-title">Don't have an account?</h2>
                <p class="user_unregistered-text">
                  Banjo tote bag bicycle rights, High Life sartorial cray craft
                  beer whatever street art fap.
                </p>
                <button
                  class="user_unregistered-signup"
                  id="signup-button"
                  onClick={this.bounceLeft}
                >
                  Sign up
                </button>
              </div>

              <div class="user_options-registered">
                <h2 class="user_registered-title">Have an account?</h2>
                <p class="user_registered-text">
                  Banjo tote bag bicycle rights, High Life sartorial cray craft
                  beer whatever street art fap.
                </p>
                <button
                  class="user_registered-login"
                  id="login-button"
                  onClick={this.bounceRight}
                >
                  Login
                </button>
              </div>
            </div>

            <div
              class="user_options-forms"
              id="user_options-forms"
              ref={this.formRef}
            >
              <div class="user_forms-login">
                <h2 class="forms_title">Login</h2>
                <form class="forms_form">
                  <fieldset class="forms_fieldset">
                    <div class="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        class="forms_field-input"
                        required
                        autofocus
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        class="forms_field-input"
                        required
                      />
                    </div>
                  </fieldset>
                  <div class="forms_buttons">
                    <button type="button" class="forms_buttons-forgot">
                      Forgot password?
                    </button>
                    <input
                      type="submit"
                      value="Log In"
                      class="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
              <div class="user_forms-signup">
                <h2 class="forms_title">Sign Up</h2>
                <form class="forms_form">
                  <fieldset class="forms_fieldset">
                    <div class="forms_field">
                      <input
                        type="text"
                        placeholder="Full Name"
                        class="forms_field-input"
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        class="forms_field-input"
                        required
                      />
                    </div>
                    <div class="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        class="forms_field-input"
                        required
                      />
                    </div>
                  </fieldset>
                  <div class="forms_buttons">
                    <input
                      type="submit"
                      value="Sign up"
                      class="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;