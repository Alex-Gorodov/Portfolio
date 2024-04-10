import { useState, useEffect } from "react";
import { LetterColors } from "../../const";
import cn from 'classnames';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import { setLastLetterIndex } from "../../store/hero/hero-actions";

type LetterProps = {
  letter: string;
  index: number;
}

export function Letter({ letter, index }: LetterProps) {
  function getRandomColor(): string {
    const colors = Object.values(LetterColors).slice(1);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const dispatch = useDispatch();
  const lastIndex = useSelector((state: RootState) => state.hero.lastIndex);

  const [isHovered, setHovered] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const letterClassName = cn('hero__letter', {
    'hero__letter--animated': isHovered,
    'hero__letter--last': lastIndex === index
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      dispatch(setLastLetterIndex({index}))
    }, 55 * index);
    return () => clearTimeout(timer);
  }, [index, dispatch]);

  return (
    <span
      className={letterClassName}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => 
        setTimeout(() => {
          setHovered(false)
        }, 750)
      }
      style={{color: isHovered ? getRandomColor() : LetterColors.Default, opacity: isLoaded ? '1' : '0'}}
    >
      {letter}
    </span>
  );
}
