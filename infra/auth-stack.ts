// import { StackContext, Cognito } from "sst/constructs";

// export function AuthStack({ stack }: StackContext) {
//   const auth = new Cognito(stack, "Auth", {
//     login: ["email", "google"],
//   });

//   stack.addOutputs({
//     UserPoolId: auth.userPoolId,
//     UserPoolClientId: auth.userPoolClientId,
//   });
// }
