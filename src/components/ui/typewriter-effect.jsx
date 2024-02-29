/* eslint-disable react/prop-types */
import {cn} from '@/lib/utils';
import {motion, useAnimation, useInView} from 'framer-motion';
import {useRef} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const renderWords = () => (
    <motion.div ref={ref} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              initial={{opacity: 0}}
              key={`char-${index}`}
              variants={{
                visible: {opacity: 1},
              }}
              className={cn(
                  `dark:text-white text-black opacity-0 hidden`,
                  word.className,
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
          'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center',
          className,
      )}
    >
      {renderWords()}
      <motion.span
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
            'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-yellow-500',
            cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey(animationKey + 1);
    }, 20000);

    return () => clearTimeout(timer);
  }, [animationKey]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={`dark:text-white text-black ${word.className}`}
                style={{color: word.className ? '#fbbf24': 'black'}}
              >
                {char}
              </span>
            ))}
            {idx !== words.length - 1 && <>&nbsp;</>}
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className={cn('flex space-x-1 my-6', className)}>
      <motion.div
        key={animationKey}
        className="overflow-hidden pb-2"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: '265px',
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-6xl font-bold"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
            'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-yellow-500',
            cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
