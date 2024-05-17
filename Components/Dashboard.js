import React from "react";
import { Text, View } from "react-native";
import { Button , Avatar} from '@rneui/base';

const Dashboard = ({setNav}) => {
  return (
    <View>
      <View className="bg-blue-600 flex h-[200px] justify-between items-center rounded-b-[60px] flex-row">
        <View className="w-14"></View>
        <Text className="text-xl text-white font-bold">Invoice</Text>
        <View className="mr-4">

        <Avatar
    size={38}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
        </View>
      </View>
      <View className="justify-center items-center">
        <View className="bg-white w-4/5 flex-row justify-between rounded-t-2xl -mt-12 p-6">
          <View className="h-28 w-[60%]  bg-[#BFD8FF] rounded-xl items-center justify-center">
            <Text className="text-xs mb-2 text-[#374767]">Amount Raised</Text>
            <Text className="text-2xl text-[#374767]">₹ 10,000</Text>
          </View>
          <View className="items-center justify-center pr-2">
            <Text className="text-xs mb-2 text-[#8F93A4] ">Amout Paid</Text>
            <Text className="text-2xl">₹ 5,000</Text>
          </View>
        </View>
      </View>
      <View className="justify-center items-center">
        <View className="flex-row justify-between w-[85%]">
          <Text className="font-bold text-base text-[#8F93A4]">Recent</Text>
          <Text className="font-bold text-base">View all</Text>
        </View>

        <View className="w-[83%] rounded-2xl my-2 border border-[#E3F2FF] p-4">
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4]">No. #10</Text>
            <Text className=" text-base text-[#8F93A4]">Lorem Ipsum</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4]">Mar 02, 2023</Text>
            <Text className=" text-base"> ₹100.0</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4] border-sky-400 border px-4 rounded-lg">Saved</Text>
            <Text className=" text-base text-[#8F93A4]">Due iin 4 days</Text>
          </View>
        </View>
        <View className="w-[83%] border border-[#E3F2FF] p-4 rounded-2xl my-2">
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4]">No. #10</Text>
            <Text className=" text-base text-[#8F93A4]">Lorem Ipsum</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4]">Mar 02, 2023</Text>
            <Text className=" text-base"> ₹100.0</Text>
          </View>
          <View className="flex-row justify-between">
          <Text className=" text-base text-[#8F93A4] border-sky-400 border px-4 rounded-lg">Saved</Text>
            <Text className=" text-base text-[#8F93A4]">Due iin 4 days</Text>
          </View>
        </View>
        <View className="w-[83%]  border border-[#E3F2FF] p-4 rounded-2xl my-2">
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4]">No. #10</Text>
            <Text className=" text-base text-[#8F93A4]">Lorem Ipsum</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className=" text-base text-[#8F93A4]">Mar 02, 2023</Text>
            <Text className=" text-base"> ₹100.0</Text>
          </View>
          <View className="flex-row justify-between">
          <Text className=" text-base text-[#8F93A4] border-sky-400 border px-4 rounded-lg">Saved</Text>
            <Text className=" text-base text-[#8F93A4]">Due iin 4 days</Text>
          </View>
        </View>
      </View>
      <View className="w-[90%] item-center">
        <View>
        <Button
              title="+ Create new invoice"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: "85%",
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              onPress={()=>setNav(true)}
            />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
