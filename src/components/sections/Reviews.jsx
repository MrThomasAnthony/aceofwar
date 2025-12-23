import React from "react";
import { Card, CardHeader, CardBody, Avatar, Chip } from "@nextui-org/react";

// Simple Star Icon Component
const StarIcon = ({ fill = "currentColor" }) => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill={fill}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Reviews = () => {
  const reviews = [
    {
      name: "Tyler D.",
      role: "Squad Leader",
      date: "2 days ago",
      rating: 5,
      content:
        "Hands down the best laser tag in Grande Prairie. The arena layout is insane—so many hiding spots and the upper level gives you a crazy tactical advantage. Staff was super chill with our big group.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      name: "Sarah Jenkins",
      role: "Birthday Host",
      date: "1 week ago",
      rating: 5,
      content:
        "Booked the 'Squad' package for my son's 12th birthday. It was flawless. The party room was ready when we got there, and the game marshal did a great job explaining the rules to the kids. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      name: "Mike Ross",
      role: "Casual Player",
      date: "3 weeks ago",
      rating: 4,
      content:
        "The equipment is way better than the other places I've been. Actual recoil and accurate sensors. Just wish the rounds were a bit longer, but I get that it's busy. Definitely coming back for the tournament.",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
  ];

  return (
    <div className="py-12 px-4 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Chip
            color="primary"
            variant="flat"
            className="mb-4 uppercase font-bold tracking-widest"
          >
            Debriefings
          </Chip>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">
            Player <span className="text-primary">Intel</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-black border border-white/10 p-4 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader className="justify-between">
                <div className="flex gap-4">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src={review.avatar}
                    color="primary"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-bold leading-none text-white">
                      {review.name}
                    </h4>
                    <h5 className="text-tiny tracking-tight text-zinc-500">
                      {review.role}
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-tiny text-zinc-600 mb-1">
                    {review.date}
                  </span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        fill={i < review.rating ? "currentColor" : "#333"}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-zinc-400 mt-2">
                <p className="italic">"{review.content}"</p>
              </CardBody>
              <div className="mt-4 px-3 flex gap-2">
                <Chip
                  size="sm"
                  variant="flat"
                  className="bg-green-500/10 text-green-500 font-bold text-[10px] uppercase"
                >
                  Verified
                </Chip>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Review Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm mb-4">
            Read all 150+ reviews on Google Maps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
