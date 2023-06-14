import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}


 

const FormLayout = ({ children }: Props) => {
  return (
    <div className="m-4 d-flex justify-content-center">
      <div className="col-sm-12 col-md-6">{children}</div>
    </div>
  );
};

export default FormLayout

