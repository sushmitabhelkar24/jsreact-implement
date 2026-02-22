const USERS = [
    
  { "name": "Aarav Sharma", "age": 24, "city": "Mumbai", "avatar": "https://i.pravatar.cc/300?img=1" },
  { "name": "Vivaan Patel", "age": 28, "city": "Ahmedabad", "avatar": "https://i.pravatar.cc/300?img=2" },
  { "name": "Aditya Singh", "age": 22, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=3" },
  { "name": "Arjun Kumar", "age": 30, "city": "Bangalore", "avatar": "https://i.pravatar.cc/300?img=4" },
  { "name": "Sai Krishna", "age": 26, "city": "Hyderabad", "avatar": "https://i.pravatar.cc/300?img=5" },
  { "name": "Rohan Verma", "age": 27, "city": "Pune", "avatar": "https://i.pravatar.cc/300?img=6" },
  { "name": "Rahul Gupta", "age": 29, "city": "Jaipur", "avatar": "https://i.pravatar.cc/300?img=7" },
  { "name": "Karan Mehta", "age": 24, "city": "Mumbai", "avatar": "https://i.pravatar.cc/300?img=8" },
  { "name": "Ankit Jain", "age": 31, "city": "Indore", "avatar": "https://i.pravatar.cc/300?img=9" },
  { "name": "Nikhil Nair", "age": 23, "city": "Kochi", "avatar": "https://i.pravatar.cc/300?img=10" },

  { "name": "Priya Sharma", "age": 25, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=11" },
  { "name": "Neha Patel", "age": 27, "city": "Ahmedabad", "avatar": "https://i.pravatar.cc/300?img=12" },
  { "name": "Ananya Reddy", "age": 21, "city": "Hyderabad", "avatar": "https://i.pravatar.cc/300?img=13" },
  { "name": "Pooja Singh", "age": 26, "city": "Lucknow", "avatar": "https://i.pravatar.cc/300?img=14" },
  { "name": "Sneha Iyer", "age": 29, "city": "Chennai", "avatar": "https://i.pravatar.cc/300?img=15" },
  { "name": "Kavya Nair", "age": 24, "city": "Kochi", "avatar": "https://i.pravatar.cc/300?img=16" },
  { "name": "Riya Gupta", "age": 28, "city": "Jaipur", "avatar": "https://i.pravatar.cc/300?img=17" },
  { "name": "Isha Shah", "age": 23, "city": "Surat", "avatar": "https://i.pravatar.cc/300?img=18" },
  { "name": "Meera Joshi", "age": 30, "city": "Pune", "avatar": "https://i.pravatar.cc/300?img=19" },
  { "name": "Aditi Verma", "age": 27, "city": "Bhopal", "avatar": "https://i.pravatar.cc/300?img=20" },

  { "name": "Aarav Sharma", "age": 24, "city": "Mumbai", "avatar": "https://i.pravatar.cc/300?img=21" },
  { "name": "Rahul Gupta", "age": 29, "city": "Jaipur", "avatar": "https://i.pravatar.cc/300?img=22" },
  { "name": "Priya Sharma", "age": 25, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=23" },
  { "name": "Rohan Verma", "age": 27, "city": "Pune", "avatar": "https://i.pravatar.cc/300?img=24" },
  { "name": "Neha Patel", "age": 27, "city": "Ahmedabad", "avatar": "https://i.pravatar.cc/300?img=25" },

  { "name": "Vikram Desai", "age": 32, "city": "Surat", "avatar": "https://i.pravatar.cc/300?img=26" },
  { "name": "Siddharth Malhotra", "age": 31, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=27" },
  { "name": "Harsh Vardhan", "age": 26, "city": "Patna", "avatar": "https://i.pravatar.cc/300?img=28" },
  { "name": "Deepak Yadav", "age": 28, "city": "Lucknow", "avatar": "https://i.pravatar.cc/300?img=29" },
  { "name": "Manish Tiwari", "age": 34, "city": "Kanpur", "avatar": "https://i.pravatar.cc/300?img=30" },

  { "name": "Sunita Devi", "age": 35, "city": "Patna", "avatar": "https://i.pravatar.cc/300?img=31" },
  { "name": "Pooja Singh", "age": 26, "city": "Lucknow", "avatar": "https://i.pravatar.cc/300?img=32" },
  { "name": "Sneha Iyer", "age": 29, "city": "Chennai", "avatar": "https://i.pravatar.cc/300?img=33" },
  { "name": "Kavya Nair", "age": 24, "city": "Kochi", "avatar": "https://i.pravatar.cc/300?img=34" },
  { "name": "Isha Shah", "age": 23, "city": "Surat", "avatar": "https://i.pravatar.cc/300?img=35" },

  { "name": "Amit Mishra", "age": 33, "city": "Varanasi", "avatar": "https://i.pravatar.cc/300?img=36" },
  { "name": "Rajesh Khanna", "age": 45, "city": "Amritsar", "avatar": "https://i.pravatar.cc/300?img=37" },
  { "name": "Suresh Pillai", "age": 41, "city": "Thiruvananthapuram", "avatar": "https://i.pravatar.cc/300?img=38" },
  { "name": "Lakshmi Menon", "age": 36, "city": "Kochi", "avatar": "https://i.pravatar.cc/300?img=39" },
  { "name": "Geeta Rani", "age": 38, "city": "Chandigarh", "avatar": "https://i.pravatar.cc/300?img=40" },

  { "name": "Vikas Yadav", "age": 28, "city": "Noida", "avatar": "https://i.pravatar.cc/300?img=41" },
  { "name": "Ritu Sharma", "age": 27, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=42" },
  { "name": "Komal Jain", "age": 22, "city": "Indore", "avatar": "https://i.pravatar.cc/300?img=43" },
  { "name": "Mohit Agarwal", "age": 31, "city": "Jaipur", "avatar": "https://i.pravatar.cc/300?img=44" },
  { "name": "Tarun Bansal", "age": 29, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=45" },

  { "name": "Aarav Sharma", "age": 24, "city": "Mumbai", "avatar": "https://i.pravatar.cc/300?img=1" },
  { "name": "Priya Sharma", "age": 25, "city": "Delhi", "avatar": "https://i.pravatar.cc/300?img=2" },
  { "name": "Rahul Gupta", "age": 29, "city": "Jaipur", "avatar": "https://i.pravatar.cc/300?img=3" },
  { "name": "Neha Patel", "age": 27, "city": "Ahmedabad", "avatar": "https://i.pravatar.cc/300?img=4" },
  { "name": "Rohan Verma", "age": 27, "city": "Pune", "avatar": "https://i.pravatar.cc/300?img=5" }

]

export {USERS}