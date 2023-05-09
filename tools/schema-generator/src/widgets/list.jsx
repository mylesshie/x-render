import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function list(props) {
  if (!/^#/.test(props.schema.$id)) {
    return <div className="w-100">{props.children}</div>;
  }
  const { t } = useTranslation();

  return (
    <div className="flex flex-column">
      <div className="fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10">
        {props.children}
      </div>
    </div>
  );
}
