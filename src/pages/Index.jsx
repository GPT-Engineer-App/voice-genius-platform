import { useState } from "react";
import { Container, VStack, Text, Button, Input, FormControl, FormLabel, IconButton, HStack, Box, Image } from "@chakra-ui/react";
import { FaWhatsapp, FaTelegram, FaMicrophone } from "react-icons/fa";

const Index = () => {
  const [crm, setCrm] = useState("");
  const [api, setApi] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (platform) => {
    // Placeholder for sending logic
    alert(`Sending message to ${platform} using CRM: ${crm} and API: ${api}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          AI Voice Note Sender
        </Text>
        <Image src="https://images.unsplash.com/photo-1528310263469-da619c84a9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHZvaWNlJTIwYXNzaXN0YW50fGVufDB8fHx8MTcxNzQ0NDk2Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Voice Assistant" boxSize="200px" borderRadius="full" />
        <FormControl id="crm">
          <FormLabel>CRM Integration</FormLabel>
          <Input placeholder="Enter your CRM details" value={crm} onChange={(e) => setCrm(e.target.value)} />
        </FormControl>
        <FormControl id="api">
          <FormLabel>Communication API</FormLabel>
          <Input placeholder="Enter your API details" value={api} onChange={(e) => setApi(e.target.value)} />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Input placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </FormControl>
        <HStack spacing={4}>
          <IconButton aria-label="Send on WhatsApp" icon={<FaWhatsapp />} colorScheme="whatsapp" onClick={() => handleSend("WhatsApp")} />
          <IconButton aria-label="Send on Telegram" icon={<FaTelegram />} colorScheme="telegram" onClick={() => handleSend("Telegram")} />
        </HStack>
        <Box mt={4}>
          <Button leftIcon={<FaMicrophone />} colorScheme="teal" onClick={() => alert("Voice Cloning Service Triggered")}>
            Generate Voice Note
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
