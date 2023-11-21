import React from 'react';
import Loading from 'public/loading.svg';
import Image from 'next/image';
import styles from "@/style/header.module.scss";

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const ConnectButton = ({ onClick, disabled }: Props) => {
  return (
      <button  className={styles.dash} onClick={onClick} disabled={disabled}>
        {disabled ? (
          <div className="loading-container min-w-full">
            <Image className="loading" alt="loading" src={Loading} />
          </div>
        ) : (
          "Connect"
        )}
      </button>
  );
};

export default ConnectButton;
