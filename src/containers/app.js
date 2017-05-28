import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    return (
      <div>
        <header className="row">
          <div className="row">
            <div className="column size_100">
              <div className="nadpis"><strong>KALKULAČKA</strong> SEMI CPT</div>
              <div className="logo">
                <img src="images/logo.png" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column size_100">
              <div className="nazev-setu">
                <form onSubmit={this.onSubmit}>
                  <input type="text" onChange={this.onChange} value={this.state.nazev_setu} />
                </form>
              </div>
            </div>
          </div>
        </header>
        <section className="row">
          <div className="vstupni_udaje wrap column">
            <h1>VSTUPNÍ ÚDAJE</h1>
            <h2>VSTUPNÍ ÚDAJE</h2>
            <Table_1 />
            <Table_2 />
            <Table_3 />
          </div>
            <Table_Results />
        </section>
        <section className="row margin-top-2">
          <div className="hidden-logo-for-print">
            <img src="/images/logo.png" />
          </div>
          <div className="komponenty wrap column">
            <h1>KOMPONENTY</h1>
            <Table_4 />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(App);
