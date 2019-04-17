import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";

import Header from "./views/Header";
import Banner from "./views/Banner";
import About from "./views/About";
import Footer from "./views/Footer";
import Portfolio from "./views/Portfolio";

import { fetchIntroduction } from "./redux/actions/introduction";
import { fetchQualifications } from "./redux/actions/qualification";
import { fetchEducation } from "./redux/actions/education";
import { fetchExperience } from "./redux/actions/experience";

import { IState, IStateDispatch } from "./redux/store";
import { fetchPortfolio } from "./redux/actions/portfolio";

const mapStateToProps = (state: IState): IState => {
    return {
        introduction: state.introduction,
        qualification: state.qualification,
        education: state.education,
        experience: state.experience,
        portfolio: state.portfolio
    };
};

const mapDispatchToProps = (dispatch): IStateDispatch => ({
    fetchIntroduction: () => {
        dispatch(fetchIntroduction());
    },
    fetchQualifications: () => {
        dispatch(fetchQualifications());
    },
    fetchEducation: () => {
        dispatch(fetchEducation())
    },
    fetchExperience: () => {
        dispatch(fetchExperience())
    },
    fetchPortfolio: () => {
        dispatch(fetchPortfolio())
    }

});

interface IApp extends IStateDispatch, IState {}

function App(props: IApp) {
    // Similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
        props.fetchIntroduction();
        props.fetchQualifications();
        props.fetchEducation();
        props.fetchExperience();
        props.fetchPortfolio();
    }, []);

    return (
        <div style={{ minWidth: "min-content" }}>
            <CssBaseline />
            <Header />
            <Banner />
            <About
                introduction = {props.introduction}
                qualification = {props.qualification}
                education = {props.education}
                experience = {props.experience}                
            />
            <Portfolio portfolio = {props.portfolio}/>
            <Footer />
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
