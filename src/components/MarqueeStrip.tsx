type MarqueeStripProps = {
  items: string[];
  className?: string;
};

function MarqueeStrip({ items, className }: MarqueeStripProps) {
  const loopItems = [...items, ...items];

  return (
    <div className={['stack-marquee', className].filter(Boolean).join(' ')}>
      <div className="stack-marquee-track" aria-hidden>
        {loopItems.map((item, index) => (
          <span key={`${item}-${index}`} className="stack-marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;
