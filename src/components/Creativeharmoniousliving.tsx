import React from "react";

const Creativeharmoniousliving = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-[#f9ece2] to-[#e4e3e1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Subscribe to our newsletter for exclusive deals, new arrivals, and
            style tips
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 input-field bg-white rounded-2xl px-4 py-3   mb-2 sm:mb-0 w-full "
              required
            />
            <button type="submit" className="btn px-8 py-3">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>
    </>
  );
};

export default Creativeharmoniousliving;
