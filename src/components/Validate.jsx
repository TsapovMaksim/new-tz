import React, { useEffect } from 'react';

function Validate({ children, isValidate, number }) {
  function validate() {
    console.log(`validate component ${number}`);
  }

  function isComponentEqualValidate(component) {
    if (React.isValidElement(component) && component.type.name === 'Validate') {
      return true;
    }
    return false;
  }

  function renderChildren(children, parentValidate = false) {
    if (!children) {
      return children;
    }

    return React.Children.map(children, child => {
      const isNeedValidate = parentValidate || child.props?.isValidate || false;
      if (isComponentEqualValidate(child)) {
        return React.cloneElement(child, {
          isValidate: isNeedValidate,
          children: renderChildren(child.props?.children, isNeedValidate),
        });
      } else if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          children: renderChildren(child.props?.children, isNeedValidate),
        });
      } else {
        return child;
      }
    });
  }

  useEffect(() => {
    if (isValidate) {
      validate();
    }
  }, [isValidate]);

  return <div>{renderChildren(children, isValidate)}</div>;
}

export default Validate;
