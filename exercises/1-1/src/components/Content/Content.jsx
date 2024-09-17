import Part from '../Part/Part';
const Content = ({parts, exercises}) => {
    return (
        <div>
            <Part part={{ name: parts[0], exercises: exercises[0] }} />
            <Part part={{ name: parts[1], exercises: exercises[1] }} />
            <Part part={{ name: parts[2], exercises: exercises[2] }} />
        </div>
    );
};

export default Content;