import React from 'react';

interface Props {
  children?: React.ReactNode;
  link?: string;
  label?: string;
  descriptions?: string;
  img?: string;
}

export function Cards({ children, link, label, descriptions, img }: Props) {
  return <div className="cards-container">{children}</div>;
}

export function Card(props: Props) {
  const { link, img, label, descriptions } = props;
  return (
    <div className="card-container">
      {link ? (
        <>
          <a href={link} target="_blank">
            {img ? <img src={img} className="card-img" /> : ''}
            <div className="card-box">
              {label ? <div className="card-label">{label}</div> : ''}
              {descriptions ? <div className="card-descriptions">{descriptions}</div> : ''}
            </div>
          </a>
        </>
      ) : (
        <div className="card-box">
          {img ? <img src={img} className="card-img" /> : ''}
          {descriptions ? <div className="">{descriptions}</div> : ''}
        </div>
      )}
    </div>
  );
}

export function CardImgButton(props: Props) {
  return <Card link={props.link} label={props.label} descriptions={props.descriptions} img={props.img} />;
}
