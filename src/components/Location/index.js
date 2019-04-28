import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.81093291298!2d67.11922257305241!3d24.908119506377737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3391fc2ab6c65%3A0x42db182ba0917706!2sBalochistan+Sajji!5e0!3m2!1sen!2s!4v1556474311631!5m2!1sen!2s"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div> Location </div>
      </div>
    </div>
  );
};

export default Location;
