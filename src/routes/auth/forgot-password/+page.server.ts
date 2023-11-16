export const actions = {
  resetPassword: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());

    try {
      await locals.pb.collection('users').requestPasswordReset(body.email);
    } catch (err: any) {
      console.error('Error resetting password: ', err);
    }

    // Always return success for security reasons, even if email could not be sent
    return { success: true };
  },
};
