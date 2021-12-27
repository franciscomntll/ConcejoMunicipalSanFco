import { Box, Flex } from "@chakra-ui/react";
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { WidthContext } from "../../context/WidthContext";

const index = ({ children, items, ...props }) => {
  const [autoplay, setAutoplay] = useState(false);
  const { width: show } = useContext(WidthContext);
  const [width, setWidth] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: items ?? [],
  });
  
  const ref = useRef();

  const handleResize = () => {
    setWidth(ref.current.getBoundingClientRect().width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return (
      () => {
        window.removeEventListener("resize", handleResize);
      },
      []
    );
  });

  useEffect(() => {
    setTimeout(() => {
      handleResize();
    }, 1000);
  }, [show]);


  useEffect(() => {
    if (autoplay && state.currentIndex + 1 < state.items.length) {
      setTimeout(() => {
        dispatch({ type: "NEXT" });
      }, 2000);
    }
  }, [state.currentIndex]);

  const reducerMove = (state, action) =>  {
    const total = () => {
      if(state.down && state.up){
        if(state.down === state.up){
          return 0
        } else {
          return state.down > state.up ? -1 : 1
        } 
      } else {
        return null
      }
      
    }
    switch (action.type) {
      case "DOWN":
        return {
          ...state,
          down: action.payload,
          total: total()
        };
      case "UP":
        if(total() === 1){
          dispatch({ type: "NEXT" })
        } else if(total() === -1){
          dispatch({ type: "PREV" })
        }
        return {
          ...state,
          up: action.payload,
          total: total()
        };
      default:
        return state;
    }
  }
  
  const [move, setMove] = useReducer(reducerMove, {
    down: null,
    up : null,
    total : null
  });



  
  return (
    <>
      <Box overflow={"hidden"} paddingBlock={"1rem"} ref={ref}>
        <Flex
        onMouseDown={(e) => setMove({type: "DOWN", payload: e.clientX})}
        onMouseUp={(e) => setMove({type: "UP", payload: e.clientX})}
          __css={{
            transform: `translateX(${-(state.currentIndex * 18)}rem)`,
            width: `${width * state.items.length + "px"}`,
            transition: `all 1s ease-out`
          }}
          cursor={"grab"}
          display={"flex"}
          {...props}
        >
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default index;

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + (1 % state.items.length),
      };
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - (1 % state.items.length),
      };
    case "GOTO":
      return {
        ...state,
        currentIndex: action.index,
      };
    case "RESET":
      return { currentIndex: 0, currentPosition: 0 };

    default:
      return state;
  }
}

