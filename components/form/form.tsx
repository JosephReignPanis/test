"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";

export default function Form() {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    fullAddress: string;
    landmark: string;
    city: string;
    province: string;
    barangay: string;
  }

  type FormErrors = Partial<Record<keyof FormData, string>>;

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    fullAddress: "",
    landmark: "",
    city: "",
    province: "",
    barangay: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.contact.trim())
      newErrors.contact = "Contact number is required.";
    if (!formData.fullAddress.trim())
      newErrors.fullAddress = "Full address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.province.trim()) newErrors.province = "Province is required.";
    if (!formData.barangay.trim())
      newErrors.barangay = "Barangay/Subdivision is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg sm:text-2xl font-bold">
              Please Enter your details for delivery
            </p>
            <p className="text-sm sm:text-md text-red-600">
              Cash on Delivery Only!
            </p>
          </div>

          {/* Name Fields */}
          <div>
            <div className="flex gap-1">
              <p className="text-lg font-bold">Name</p>
              <p className="text-lg font-bold text-red-600">*</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white rounded-sm p-2 text-black w-full"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white rounded-sm p-2 text-black w-full"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Email and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-bold">Email Address</p>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white rounded-sm p-2 text-black w-full"
                placeholder="example@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-bold">Contact Number</p>
              <input
                name="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                className="bg-white rounded-sm p-2 text-black w-full"
                placeholder="09XXXXXXXXX"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm">{errors.contact}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-lg font-bold">Full Address</p>
              <input
                name="fullAddress"
                type="text"
                value={formData.fullAddress}
                onChange={handleChange}
                className="bg-white rounded-sm p-2 text-black w-full"
                placeholder="Full Address"
              />
              {errors.fullAddress && (
                <p className="text-red-500 text-sm">{errors.fullAddress}</p>
              )}
            </div>
            <div>
              <input
                name="landmark"
                type="text"
                value={formData.landmark}
                onChange={handleChange}
                className="bg-white rounded-sm p-2 text-black w-full"
                placeholder="Landmark (Optional)"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-white rounded-sm p-2 text-black w-full"
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
              <div>
                <input
                  name="province"
                  type="text"
                  value={formData.province}
                  onChange={handleChange}
                  className="bg-white rounded-sm p-2 text-black w-full"
                  placeholder="Province"
                />
                {errors.province && (
                  <p className="text-red-500 text-sm">{errors.province}</p>
                )}
              </div>
            </div>

            <div>
              <input
                name="barangay"
                type="text"
                value={formData.barangay}
                onChange={handleChange}
                className="bg-white rounded-sm p-2 text-black w-full"
                placeholder="Barangay/Subdivision"
              />
              {errors.barangay && (
                <p className="text-red-500 text-sm">{errors.barangay}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-bold">Upload Payment</p>

              <input
                name="payment"
                type="file"
                onChange={handleChange}
                className="bg-white rounded-sm p-2 text-black w-full"
                placeholder="example@example.com"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Image src={"/qrcode.png"} width={500} height={500} alt="test" />
              <div className="flex flex-row w-full border border-neutral-800 bg-white rounded-md text-black ">
                <label
                  htmlFor="file-upload"
                  className="w-full items-center p-4 text-center"
                >
                  <i className="fa fa-cloud-upload"></i> Custom Upload
                </label>
                <input id="file-upload" type="file" accept=".png, .jpeg" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>{" "}
      <Link href={"/confirmation"}>
        <button
          type="submit"
          className="bg-red-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Submit
        </button>
      </Link>
    </>
  );
}
