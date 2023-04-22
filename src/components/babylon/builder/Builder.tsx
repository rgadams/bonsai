import BuilderMenu from 'components/babylon/builder/buildermenu/BuilderMenu';
import Viewport from 'components/babylon/viewport/Viewport';
import React from 'react';

export default class Builder extends React.Component {
  render() {
    return (
      <div className="bonsai-builder">
        <BuilderMenu />
        <Viewport />
      </div>
    );
  }
}
