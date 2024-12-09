import React from 'react';

const Header = ({ data, changeUser }) => {
  // Use data and props directly
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser(''); // Reset the user state in the parent component
    // window.location.reload(); // Optional: reload page if needed
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{data ? data.firstName : 'Admin'}👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
