import { convertNodeToString } from '@/libs/utils/string';

type As = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingAnchorProps = {
  as: As;
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export const HeadingAnchor: React.FC<HeadingAnchorProps> = ({
  as: Component,
  id: _id,
  className,
  children,
}) => {
  const id = _id ?? convertNodeToString(children);

  return (
    <Component id={id} className={className}>
      <a href={`#${id}`} className="no-underline hover:underline">
        {children}
      </a>
    </Component>
  );
};
