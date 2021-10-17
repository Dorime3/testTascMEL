import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/heroesReducer';
import s from './HeroesPage.module.scss'


class HeroesPage extends React.Component {
    componentDidMount() {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(res => {
                this.props.setChars(res.results)
            })
    }
    setFavorite = (id) => {
        this.props.makeFavorite(id);
    }
    setUnFavorite = (id) => {
        this.props.makeUnFavorite(id);
    }
    render() {
        return (
            <div className={s.heroes}>
                {this.props.chars.map(char =>
                    <div key={char.url} className={s.heroesCard}>
                        <div>Имя: {char.name}</div>
                        <div>Пол: {char.gender}</div>
                        <div>Рост: {char.height}</div>
                        <div>Вес: {char.mass}</div>
                        {char.favorite
                            ? <button className={s.favorite} onClick={() => this.setUnFavorite(char.url)}>unfavorite</button>
                            : <button className={s.favorite} onClick={() => this.setFavorite(char.url)}>favorite</button>
                        }
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    chars: state.heroesPage.chars
});

const mapDispatchToProps = (dispatch) => ({
    setChars: (chars) => {
        dispatch(actions.setChars(chars))
    },
    makeFavorite: (url) => {
        dispatch(actions.makeFavorite(url))
    },
    makeUnFavorite: (url) => {
        dispatch(actions.makeUnFavorite(url))
    }
});

export const HeroesPageContainer = connect(mapStateToProps, mapDispatchToProps)(HeroesPage);
