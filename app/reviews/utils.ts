// Review type definition
export interface Review {
  id: number;
  name: string;
  image: string | null;
  date: string;
  rating: number;
  verified: boolean;
  content: string;
  helpful: number;
  unhelpful: number;
}

// Generate reviews with optimized performance
export const generateReviews = (): Review[] => {
  // Reduce the number of reviews to improve performance
  const TOTAL_REVIEWS = 200; // Reduced from 674 for better performance
  const reviews: Review[] = [];

  // Pre-generate all possible names to avoid checking for duplicates during generation
  const firstNames = [
    "Emma",
    "Michael",
    "Sarah",
    "David",
    "Sophia",
    "James",
    "Olivia",
    "William",
    "Isabella",
    "Alexander",
    "Ava",
    "Ethan",
    "Mia",
    "Lucas",
    "Charlotte",
    "Noah",
    "Sofia",
    "Benjamin",
    "Victoria",
    "Daniel",
  ];

  const lastNames = [
    "Thompson",
    "Chen",
    "Williams",
    "Martinez",
    "Rodriguez",
    "Wilson",
    "Brown",
    "Lee",
    "Garcia",
    "Kim",
    "Patel",
    "Nguyen",
    "Johnson",
    "Taylor",
    "Davis",
    "Anderson",
    "White",
    "Moore",
    "Wright",
    "Campbell",
  ];

  // Pre-generate all possible names
  const names: string[] = [];
  for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
      names.push(`${firstNames[i]} ${lastNames[j]}`);
    }
  }

  // Shuffle names array to get random unique names
  const shuffledNames = names
    .sort(() => 0.5 - Math.random())
    .slice(0, TOTAL_REVIEWS);

  // Simplified profile images list
  const profileImages = [
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
  ];

  // Pre-generate content templates for each rating level
  const contentTemplates = {
    high: [
      "Received my $AMOUNT$ welcome bonus instantly! The verification process was smooth and secure.",
      "Got $PERCENT$% rewards on my crypto holdings. Everything was calculated perfectly.",
      "Verification took only $MINUTES$ minutes. Rewards were in my wallet right away!",
      "Made $AMOUNT$ in rewards last month. This platform is incredible!",
      "The $PERCENT$% bonus on my ETH balance was a pleasant surprise.",
    ],
    medium: [
      "Decent platform but took $MINUTES$ minutes to verify.",
      "The $PERCENT$% reward rate is okay, but could be better.",
      "Had to contact support $COUNT$ times before resolution.",
      "Interface needs work but rewards are paid as promised.",
      "Verification failed $COUNT$ times before success.",
    ],
    low: [
      "Waited $HOURS$ hours for support response.",
      "Lost connection $COUNT$ times during verification.",
      "The promised $AMOUNT$ bonus never arrived.",
      "Verification failed after $COUNT$ attempts.",
      "Support was unhelpful with my $AMOUNT$ missing reward.",
    ],
  };

  // Generate content with placeholders replaced
  const generateContent = (rating: number): string => {
    let template: string;

    if (rating >= 4) {
      template =
        contentTemplates.high[
          Math.floor(Math.random() * contentTemplates.high.length)
        ];
      return template
        .replace("$AMOUNT$", `${Math.floor(Math.random() * 300 + 50)}$`)
        .replace("$PERCENT$", `${Math.floor(Math.random() * 15 + 25)}`)
        .replace("$MINUTES$", `${Math.floor(Math.random() * 5 + 2)}`);
    } else if (rating === 3) {
      template =
        contentTemplates.medium[
          Math.floor(Math.random() * contentTemplates.medium.length)
        ];
      return template
        .replace("$MINUTES$", `${Math.floor(Math.random() * 20 + 10)}`)
        .replace("$PERCENT$", `${Math.floor(Math.random() * 10 + 15)}`)
        .replace("$COUNT$", `${Math.floor(Math.random() * 3 + 1)}`);
    } else {
      template =
        contentTemplates.low[
          Math.floor(Math.random() * contentTemplates.low.length)
        ];
      return template
        .replace("$HOURS$", `${Math.floor(Math.random() * 24 + 24)}`)
        .replace("$COUNT$", `${Math.floor(Math.random() * 5 + 3)}`)
        .replace("$AMOUNT$", `${Math.floor(Math.random() * 100 + 50)}$`);
    }
  };

  const endDate = new Date("2025-03-15");
  const startDate = new Date("2024-03-15");
  const timeSpan = endDate.getTime() - startDate.getTime();

  // Generate reviews in a more efficient way
  for (let i = 0; i < TOTAL_REVIEWS; i++) {
    const randomDate = new Date(startDate.getTime() + Math.random() * timeSpan);
    const hasImage = Math.random() > 0.4; // 60% chance of having a profile image

    // Determine rating with the same distribution as before
    let rating;
    const ratingRandom = Math.random();
    if (ratingRandom < 0.6) rating = 5;
    else if (ratingRandom < 0.8) rating = 4;
    else if (ratingRandom < 0.9) rating = 3;
    else if (ratingRandom < 0.97) rating = 2;
    else rating = 1;

    reviews.push({
      id: i + 1,
      name: shuffledNames[i],
      image: hasImage
        ? profileImages[i % profileImages.length] +
          "?auto=compress&cs=tinysrgb&w=150"
        : null,
      date: randomDate.toISOString().split("T")[0],
      rating,
      verified: Math.random() > 0.1, // 90% verified users
      content: generateContent(rating),
      helpful: Math.floor(Math.random() * 50),
      unhelpful: Math.floor(Math.random() * 10),
    });
  }

  // Sort by date (newest first)
  return reviews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
