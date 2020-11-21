import styled from "styled-components";

const starYellow = 'rgb(255, 215, 0)';

export const Ratings = styled.div`
  display: flex;

  .icons {
    position: absolute;
  }
  .fa-star {
    color: ${starYellow};
  }

  i {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }

  .fa-stack {
    font-size: 0.75em;
  }

  .yellowBar {
    position: absolute;
    width: 75%;
    height: 1.5rem;
    background-color: ${starYellow};
    z-index: 0;
  }
`;

export const Stars = styled.div`
    font-size: 12px;

    background: linear-gradient(90deg, ${starYellow} ${props => props.starPercent}%, gray ${props => props.starPercent}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;