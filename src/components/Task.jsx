import React, {Component} from "react";
import PropTypes from "prop-types";
import { FcApproval} from "react-icons/fc";
import { FiCircle } from "react-icons/fi";

class Task extends Component {
    render() {
        return(
            <div className="task">
                {/*<FcApproval />*/}
              <span className="icon-curcle">
                 <FiCircle />
              </span>
                <span>
                    {this.props.task.name}
                </span>
                <br/>
                <span className="description">
                    {this.props.task.description}
                </span>
            </div>
        )
    }

}

export default Task;


Task.propTypes = {
    task: PropTypes.object.isRequired
};

