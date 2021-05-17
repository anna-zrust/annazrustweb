import React from 'react';

class ThemeToggle extends React.Component {
     onToggleChange(theme) {
        this.props.onThemeChange(theme)
    }

    render() {
        let themeToggles = []
        for (let i=1; i <= 3; i++) {
            let themeToggle =  <input
                                    id={'theme' + i + 'Toggle'}
                                    name="theme"
                                    type="radio"
                                    checked={this.props.currentTheme === i}
                                    key={i}
                                    onChange={this.onToggleChange.bind(this, i)}
                                />
            let toggleLabel =   <label htmlFor={'theme' + i + 'Toggle'} key={'label' + i}>
                                    Theme {i}
                                </label>

            themeToggles.push(themeToggle);
            themeToggles.push(toggleLabel);
        }
        return (
            <div className='toggle-theme'>
                {themeToggles}
            </div>
        )
    }
}

export default ThemeToggle;
