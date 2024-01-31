import React, { useState } from 'react';
import './AdminViewEnquiry.css'; // Import the CSS file

const AdminViewEnquiry = () => {
  const [enquiries] = useState([
        {
          id: 1,
          emailId: 'example1@example.com',
          courseName: 'React 101',
          description: 'I have a question about React basics.',
          enquiryDate: '2024-01-30',
          enquiryType: 'General',
          response: '',
          contactNumber: '123-456-7890',
          city: 'New York',
          country: 'USA',
          postalCode: '10001',
          preferredContact: 'Email',
          referredBy: 'Friend',
          additionalComments: 'No additional comments',
        },
        {
          id: 2,
          emailId: 'example2@example.com',
          courseName: 'Node.js Fundamentals',
          description: 'Interested in learning Node.js. What are the prerequisites?',
          enquiryDate: '2024-01-30',
          enquiryType: 'Technical',
          response: '',
          contactNumber: '987-654-3210',
          city: 'San Francisco',
          country: 'USA',
          postalCode: '94105',
          preferredContact: 'Phone',
          referredBy: 'Online Search',
          additionalComments: 'Looking forward to starting the course!',
        },
        {
          id: 3,
          emailId: 'example3@example.com',
          courseName: 'Python for Beginners',
          description: 'Looking to start with Python. Any recommended resources?',
          enquiryDate: '2024-01-31',
          enquiryType: 'General',
          response: '',
          contactNumber: '456-789-0123',
          city: 'London',
          country: 'UK',
          postalCode: 'WC1E 6BT',
          preferredContact: 'Email',
          referredBy: 'Social Media',
          additionalComments: 'Excited to dive into Python!',
        },
        {
          id: 4,
          emailId: 'example4@example.com',
          courseName: 'Web Development Bootcamp',
          description: 'Considering a web development bootcamp. What technologies are covered?',
          enquiryDate: '2024-01-31',
          enquiryType: 'Technical',
          response: '',
          contactNumber: '789-012-3456',
          city: 'Berlin',
          country: 'Germany',
          postalCode: '10117',
          preferredContact: 'Phone',
          referredBy: 'Friend',
          additionalComments: 'Looking for a comprehensive bootcamp!',
        },
        {
          id: 5,
          emailId: 'example5@example.com',
          courseName: 'JavaScript Advanced Concepts',
          description: 'Exploring advanced JavaScript concepts. Any recommended courses?',
          enquiryDate: '2024-02-01',
          enquiryType: 'Technical',
          response: '',
          contactNumber: '234-567-8901',
          city: 'Tokyo',
          country: 'Japan',
          postalCode: '100-0004',
          preferredContact: 'Email',
          referredBy: 'Colleague',
          additionalComments: 'Excited to deepen my JS knowledge!',
        },
        {
          id: 6,
          emailId: 'example6@example.com',
          courseName: 'Data Science Essentials',
          description: 'Interested in data science. What are the essential topics to cover?',
          enquiryDate: '2024-02-01',
          enquiryType: 'General',
          response: '',
          contactNumber: '345-678-9012',
          city: 'Sydney',
          country: 'Australia',
          postalCode: '2000',
          preferredContact: 'Phone',
          referredBy: 'Online Ad',
          additionalComments: 'Looking for a data science roadmap!',
        },
        {
          id: 7,
          emailId: 'example7@example.com',
          courseName: 'UI/UX Design Basics',
          description: 'Considering a career in UI/UX design. Where should I start?',
          enquiryDate: '2024-02-02',
          enquiryType: 'General',
          response: '',
          contactNumber: '876-543-2109',
          city: 'Toronto',
          country: 'Canada',
          postalCode: 'M5H 2N2',
          preferredContact: 'Email',
          referredBy: 'Event',
          additionalComments: 'Interested in creating user-friendly designs!',
        },
        {
          id: 8,
          emailId: 'example8@example.com',
          courseName: 'Mobile App Development',
          description: 'Exploring mobile app development. Any recommended frameworks?',
          enquiryDate: '2024-02-02',
          enquiryType: 'Technical',
          response: '',
          contactNumber: '567-890-1234',
          city: 'Paris',
          country: 'France',
          postalCode: '75001',
          preferredContact: 'Phone',
          referredBy: 'Online Forum',
          additionalComments: 'Excited to build my first mobile app!',
        },
        {
          id: 9,
          emailId: 'example9@example.com',
          courseName: 'Machine Learning Fundamentals',
          description: 'Interested in machine learning basics. Any prerequisites?',
          enquiryDate: '2024-02-03',
          enquiryType: 'Technical',
          response: '',
          contactNumber: '678-901-2345',
          city: 'Singapore',
          country: 'Singapore',
          postalCode: '179098',
          preferredContact: 'Email',
          referredBy: 'Newsletter',
          additionalComments: 'Eager to explore the world of machine learning!',
        },
        {
          id: 10,
          emailId: 'example10@example.com',
          courseName: 'Cybersecurity Essentials',
          description: 'Considering a career in cybersecurity. What are the essential skills?',
          enquiryDate: '2024-02-03',
          enquiryType: 'General',
          response: '',
          contactNumber: '901-234-5678',
          city: 'New Delhi',
          country: 'India',
          postalCode: '110001',
          preferredContact: 'Phone',
          referredBy: 'Search Engine',
          additionalComments: 'Looking for guidance in the cybersecurity field!',
        },
      ]);

      const [enquiryStatus, setEnquiryStatus] = useState({});
      const [enquiryReplies, setEnquiryReplies] = useState({});
    
      const handleStatusChange = (id, status) => {
        setEnquiryStatus((prevStatus) => ({ ...prevStatus, [id]: status }));
      };
    
      const handleReplyChange = (id, reply) => {
        setEnquiryReplies((prevReplies) => ({ ...prevReplies, [id]: reply }));
      };
      const handleSubmit = (id) => {
        // Implement your submit logic here
        console.log(`Submitting for Enquiry ID ${id}`);
      };


  return (
    <div>
        <div>
      <nav className="Adennavbar">
        <div className="Adenbrand">
          {/* <FontAwesomeIcon icon={faBook} className="Adhlearning-icon" /> */}
          LearnQuir
        </div>
        <ul className="Adennav-list">
          <li className="Adennav-item">
            <a to="#" className="Adennav-link">
              Courses
            </a>
          </li>
          <li className="Adennav-item">
            <a to="#" className="Adennav-link">
              Enquiry
            </a>
          </li>
          {/* <li className="Adennav-item">
            <a to="#" className="Adennav-link">
              Dashboard
            </a>
          </li> */}
          <li className="Adennav-item">
            <a to="#" className="Adennav-link">
              Payment
            </a>
          </li>
        </ul>
      </nav>
    

      <div className="adenquiries-container">
        <h1 className="adenquiries-heading">Enquiries</h1>
        <table className="adenquiries-table">
          <thead>
            <tr>
              <th className="adenquiries-header">Enquiry ID</th>
              <th className="adenquiries-header">Email Id</th>
              <th className="adenquiries-header">Course Name</th>
              <th className="adenquiries-header">Description</th>
              <th className="adenquiries-header">Enquiry Date</th>
              <th className="adenquiries-header">Enquiry Type</th>
              <th className="adenquiries-header">Action</th>
              <th className="adenquiries-header">Response</th>
              <th className="adenquiries-header">Reply</th>
              <th className="adenquiries-header">Submit</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="adenquiries-row">
                <td className="adenquiries-data">{enquiry.id}</td>
                <td className="adenquiries-data">{enquiry.emailId || 'N/A'}</td>
                <td className="adenquiries-data">{enquiry.courseName || 'N/A'}</td>
                <td className="adenquiries-data">{enquiry.description || 'N/A'}</td>
                <td className="adenquiries-data">{enquiry.enquiryDate || 'N/A'}</td>
                <td className="adenquiries-data">{enquiry.enquiryType || 'N/A'}</td>
                <td className="adenquiries-data">
                  <select
                    value={enquiryStatus[enquiry.id] || 'Inprogress'}
                    onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                  >
                    <option value="Inprogress">Inprogress</option>
                    <option value="Success">Success</option>
                    <option value="Declined">Declined</option>
                  </select>
                </td>
                <td className="adenquiries-data">{enquiryStatus[enquiry.id] || 'N/A'}</td>
                <td className="adenquiries-data">
                  <textarea
                    value={enquiryReplies[enquiry.id] || ''}
                    onChange={(e) => handleReplyChange(enquiry.id, e.target.value)}
                    rows={4}
                    cols={40}
                  />
                </td>
                <td className="adenquiries-data">
                  <button onClick={() => handleSubmit(enquiry.id)}>Submit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AdminViewEnquiry;
