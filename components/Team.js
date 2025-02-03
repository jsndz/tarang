import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Messages = () => {
  const testimonials = [
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Dr. B Unnikrishnan",
      designation: "Dean",
      src: "/dean.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Dr Suresh B Shetty",
      designation: "Associate Dean",
      src: "/adean.jpg",
    },

    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Dr Shrikala Baliga ",
      designation: "Associate Dean",
      src: "/adean1.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Dr Saraswathy Sreeram ",
      designation: "Faculty Advisor and Alumni",
      src: "/advisor.jpg",
    },
  ];
  return (
    <div className="p-6 rounded-lg shadow-md bg-dark">
      {" "}
      <h2 className="text-2xl font-semibold mb-4 text-text">Messages</h2>{" "}
      <div className="border border-gray-300 p-4 rounded-lg bg-dark">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Messages;
