import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/heroesReducer';
import s from './Header.module.scss';


class Header extends React.Component {

    onHeroesChange = (e) => {
        this.props.changeText(e.target.value)
    }

    onFilterChars = () => {
        this.props.filterChars(this.props.text)
    }

    onFilterFavorite = () => {
        this.props.filterFavorite()
    }

    render() {
        return (
            <div className={s.header}>
                <div className={s.find}>
                    <input
                        onChange={this.onHeroesChange}
                        autoFocus={true}
                        value={this.props.text} />
                    <button onClick={this.onFilterChars}>Find</button>
                </div>
                <div className={s.favorites}>
                    <button onClick={this.onFilterFavorite}>Favorites</button>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    text: state.heroesPage.text
})

const MapDispatchToProps = (dispatch) => ({
    changeText: (text) => {
        dispatch(actions.textChange(text))
    },
    filterChars: (value) => {
        dispatch(actions.filterChars(value))
    },
    filterFavorite: () => {
        dispatch(actions.filterFavorite())
    }
})

export const HeaderContainer = connect(MapStateToProps, MapDispatchToProps)(Header)