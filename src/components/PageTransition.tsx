import { useEffect, useRef, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  transitionKey?: string;
}

const PageTransition = ({ children, transitionKey }: PageTransitionProps) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit'>('enter');
  const prevKeyRef = useRef(transitionKey);

  useEffect(() => {
    if (transitionKey !== prevKeyRef.current) {
      prevKeyRef.current = transitionKey;
      setTransitionStage('exit');
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('enter');
        window.scrollTo(0, 0);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      setDisplayChildren(children);
    }
  }, [children, transitionKey]);

  return (
    <div
      style={{
        opacity: transitionStage === 'enter' ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
