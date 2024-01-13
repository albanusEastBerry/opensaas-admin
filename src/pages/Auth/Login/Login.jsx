import React from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { LucideChevronRight } from 'lucide-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../lib/validation/AuthSchema';
import { Button } from '@/components/ui/button';

const Login = () => {
  const form = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-white rounded-md shadow-md flex">
        <div className="flex-1">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-500 tracking-tight mb-4"> Admin Dashboard</h1>
          </div>

          <Form {...form} className="space-y-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-gray-700 text-sm font-bold mb-2">✉️ Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-600" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-gray-700 text-sm font-bold mb-2">🔒 Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-600" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-gray-600 hover:to-red-600 text-white font-bold px-20 py-2 rounded-full transform hover:translate-y-1 transition-transform duration-300">
            Sign In <LucideChevronRight />
            </Button>
            </form>
          </Form>
        </div>
        <div className="flex-1 ml-3">
        <img
          src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover rounded-md"
        />

        </div>
      </div>
    </div>
  );
};

export default Login;