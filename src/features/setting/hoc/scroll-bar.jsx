import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const withScrollbarTheme = (WrappedComponent) => {
  return (props) => {
    const currentTheme = useSelector((state) => state.currentTheme.value);
    const [scrollbarTheme, setScrollbarTheme] = useState(
      currentTheme === 'dark-default' ? 'os-theme-light' : 'os-theme-dark'
    );

    useEffect(() => {
      const theme = currentTheme === 'dark-default' ? 'os-theme-light' : 'os-theme-dark';
      setScrollbarTheme(theme);
    }, [currentTheme]);

    return (
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'move', theme: scrollbarTheme } }}
        defer
      >
        <WrappedComponent {...props} />
      </OverlayScrollbarsComponent>
    );
  };
};

export default withScrollbarTheme;
