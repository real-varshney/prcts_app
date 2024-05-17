import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, Button } from "@rneui/base";

const Invoice = ({setNav}) => {
  return (
    <View> 
      <View className="flex-row justify-between p-4 pt-16 pb-5 bg-blue-500 items-center">
        <View>
          <Button icon={{
                name: 'arrow-left',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              buttonStyle={{
                backgroundColor: 'rgb(59 130 246)',
              }}
              onPress={()=>setNav(false)}/>
        </View>
        <View>
          <Text className="text-xl text-white font-bold">Invoice</Text>
        </View>
        <View>
        <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
  />
        </View>
      </View>
      <ScrollView className="p-2 mb-64 ">
        <View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Details</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl">
            <Text className="text-[#9497A6] text-sm pb-1">No. #10</Text>
            <Text className="text-base pb-1 font-bold">Mar 02, 2023</Text>
            <Text className="text-[#9497A6] text-sm">Due on Mar 09,2023</Text>
          </View>
        </View>
        <View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Clients</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl flex-row items-center">
            <Avatar
              size={44}
              rounded
              icon={{ name: "user", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "#1C85E8" }}
            />
            <Text className="text-base font-bold mx-3">
              + Add client detils
            </Text>
          </View>
        </View>
        <View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Items</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl flex-row items-center">
            <Avatar
              size={44}
              rounded
              icon={{ name: "bars", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "#1C85E8" }}
            />
            <Text className="text-base font-bold mx-3">
              + Add items
            </Text>
          </View>
        </View>
        <View>
        </View>
        <View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Total</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl items-center">
            <View className="flex-row justify-between w-full">
                <Text className="text-base text-[#9497A6] font-semibold">Subtotal</Text>
                <Text  className="text-base text-[#9497A6] font-semibold">₹0.0</Text>
            </View>
            <View className="flex-row justify-between w-full">
                <Text  className="text-base text-[#9497A6] font-semibold">Subtotal</Text>
                <Text  className="text-base text-[#9497A6] font-semibold">₹0.0</Text>
            </View>
            <View className="border border-[#EEEEEE] w-full my-3"></View>
            <View className="flex-row justify-between w-full">
                <Text  className="text-base font-bold">Total</Text>
                <Text  className="text-base font-bold">₹0.0</Text>
            </View>

          </View>
        </View>
        <View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Note</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl flex-row items-center">
            <Avatar
              size={44}
              rounded
              icon={{ name: "bars", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "#1C85E8" }}
            />
            <Text className="text-base font-bold mx-3">
              + Add note
            </Text>
          </View>
        </View><View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Signature</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl flex-row items-center">
            <Avatar
              size={44}
              rounded
              icon={{ name: "bars", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "#1C85E8" }}
            />
            <Text className="text-base font-bold mx-3">
              + Add signature
            </Text>
          </View>
        </View><View>
          <View className="m-2">
            <Text className="font-bold text-lg text-[#8F93A4]">Photo</Text>
          </View>
          <View className="mx-4 my-2 border border-[#E3F2FF] p-4 rounded-xl flex-row items-center">
            <Avatar
              size={44}
              rounded
              icon={{ name: "bars", type: "font-awesome" }}
              containerStyle={{ backgroundColor: "#1C85E8" }}
            />
            <Text className="text-base font-bold mx-3">
              + Add photo
            </Text>
          </View>
        </View>

        <View className="flex-row p-4 justify-between">
            <Button title="Save" containerStyle={{
                width: "45%",

            }}/>
            <Button title="Share" type="outline" containerStyle={
                {
                    width: "45%"
                }}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Invoice;
