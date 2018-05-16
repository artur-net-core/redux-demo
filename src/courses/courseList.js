import React, { PropTypes } from 'react';
import CourseListItem from './courseListItem';

const CourseList = ({courses}) => {
    return (
        <div>
            <h1>Courses</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(c => <CourseListItem key={c.id} course={c} />)}
                </tbody>
            </table>
        </div>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;