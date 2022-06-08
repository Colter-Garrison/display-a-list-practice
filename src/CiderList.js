import CiderItem from './CiderItem';

export default function CiderList({ ciders }) {
  return (
    <div>
      {
        ciders.map((cider, i) => <CiderItem
          {...cider}
          key={name + i}/>)
      }
    </div>
  );
}
